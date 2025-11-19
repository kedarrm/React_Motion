"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"


export default function MovingNodes({
  nodeCount = 60,
  connectionDistance = 120,
  speed = 1,
  nodeSize = 3,
  width = "100%",
  height = "100%",
  mode = "wrap",
}) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const nodesRef = useRef([])
  const [running, setRunning] = useState(true)
  const [count, setCount] = useState(nodeCount)
  const [distance, setDistance] = useState(connectionDistance)
  const [velScale, setVelScale] = useState(speed)
  const [modeState, setModeState] = useState(mode)

  const rand = (min, max) => Math.random() * (max - min) + min

  const initNodes = useCallback((w, h, n) => {
    const nodes = []
    for (let i = 0; i < n; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: rand(-0.6, 0.6) * velScale,
        vy: rand(-0.6, 0.6) * velScale,
        r: Math.max(1, nodeSize + Math.random() * 2),
        id: i,
        hue: Math.floor(rand(180, 260)),
      })
    }
    nodesRef.current = nodes
  }, [velScale, nodeSize])

  function resizeCanvasToDisplaySize(canvas) {
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    const cssWidth = rect.width
    const cssHeight = height && typeof height === "number" ? height : rect.height
    const w = Math.max(1, Math.floor(cssWidth * dpr))
    const h = Math.max(1, Math.floor(cssHeight * dpr))
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
      canvas.style.width = cssWidth + "px"
      canvas.style.height = cssHeight + "px"
      return true
    }
    return false
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let last = performance.now()

    const step = (now) => {
      const dT = Math.min(40, now - last) / 16.6667
      last = now
      const dpr = window.devicePixelRatio || 1
      const cw = canvas.width / dpr
      const ch = canvas.height / dpr

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, cw, ch)

      const bg = ctx.createLinearGradient(0, 0, cw, ch)
      bg.addColorStop(0, "rgba(6,10,20,0.85)")
      bg.addColorStop(1, "rgba(12,14,30,0.92)")
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, cw, ch)

      const nodes = nodesRef.current
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx * dT
        n.y += n.vy * dT

        if (modeState === "wrap") {
          if (n.x < -20) n.x = cw + 20
          if (n.x > cw + 20) n.x = -20
          if (n.y < -20) n.y = ch + 20
          if (n.y > ch + 20) n.y = -20
        } else {

          if (n.x <= 0 || n.x >= cw) n.vx *= -1
          if (n.y <= 0 || n.y >= ch) n.vy *= -1

          n.x = Math.max(0, Math.min(cw, n.x))
          n.y = Math.max(0, Math.min(ch, n.y))
        }
      }


      ctx.lineWidth = 0.7
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < distance) {
            const alpha = 1 - dist / distance
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(160,170,255,${(alpha * 0.25).toFixed(3)})`
            ctx.stroke()
          }
        }
      }


      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3)
        grad.addColorStop(0, `hsla(${n.hue},90%,68%,1)`)
        grad.addColorStop(0.25, `hsla(${n.hue},85%,60%,0.9)`)
        grad.addColorStop(1, `rgba(20,24,40,0.0)`)
        ctx.beginPath()
        ctx.fillStyle = grad
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()

      if (running) animationRef.current = requestAnimationFrame(step)
    }

    resizeCanvasToDisplaySize(canvas)
    const dpr = window.devicePixelRatio || 1
    const cw = canvas.width / dpr
    const ch = canvas.height / dpr
    initNodes(cw, ch, count)

    animationRef.current = requestAnimationFrame(step)

    const handleResize = () => {
      const changed = resizeCanvasToDisplaySize(canvas)
      const dpr2 = window.devicePixelRatio || 1
      const cw2 = canvas.width / dpr2
      const ch2 = canvas.height / dpr2
      if (changed) {
        const nodes = nodesRef.current
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].x = Math.random() * cw2
          nodes[i].y = Math.random() * ch2
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [running, initNodes, count, distance, modeState, velScale, height])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const cw = canvas.width / dpr
    const ch = canvas.height / dpr
    initNodes(cw, ch, count)
  }, [count, initNodes])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let rect = canvas.getBoundingClientRect()

    const onPointerMove = (e) => {
      const nodes = nodesRef.current
      const x = (e.clientX - rect.left) * (canvas.width / rect.width) / (window.devicePixelRatio || 1)
      const y = (e.clientY - rect.top) * (canvas.height / rect.height) / (window.devicePixelRatio || 1)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const dx = n.x - x
        const dy = n.y - y
        const dist2 = dx * dx + dy * dy
        const minDist = 60
        if (dist2 < minDist * minDist) {
          const f = (minDist - Math.sqrt(dist2)) / minDist
          n.vx += (dx / (Math.sqrt(dist2) + 0.001)) * f * 0.6
          n.vy += (dy / (Math.sqrt(dist2) + 0.001)) * f * 0.6
          n.vx = Math.max(-2.5 * velScale, Math.min(2.5 * velScale, n.vx))
          n.vy = Math.max(-2.5 * velScale, Math.min(2.5 * velScale, n.vy))
        }
      }
    }

    const onPointerDown = (e) => {

      const rect2 = canvas.getBoundingClientRect()
      const x = (e.clientX - rect2.left) * (canvas.width / rect2.width) / (window.devicePixelRatio || 1)
      const y = (e.clientY - rect2.top) * (canvas.height / rect2.height) / (window.devicePixelRatio || 1)
      for (let i = 0; i < 5; i++) {
        nodesRef.current.push({
          x,
          y,
          vx: rand(-1.2, 1.2) * velScale,
          vy: rand(-1.2, 1.2) * velScale,
          r: Math.max(1, nodeSize + Math.random() * 2),
          id: Math.random(),
          hue: Math.floor(rand(180, 300)),
        })
      }
      setCount(nodesRef.current.length)
    }

    const updateRect = () => (rect = canvas.getBoundingClientRect())
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("resize", updateRect)

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("resize", updateRect)
    }
  }, [velScale, nodeSize])


  const toggleRunning = () => setRunning((r) => !r)
  const clearNodes = () => {
    nodesRef.current = []
    setCount(0)
  }
  const removeHalf = () => {
    nodesRef.current = nodesRef.current.slice(0, Math.floor(nodesRef.current.length / 2))
    setCount(nodesRef.current.length)
  }

  return (
    <div className="w-full">
      <div className="relative border border-neutral-800 shadow-lg">
        <canvas ref={canvasRef} style={{ width, height }} className="block" />

        <div className="absolute top-4 left-4 bg-neutral-300 backdrop-blur-md rounded-xl p-3 text-sm flex gap-3 items-center border border-neutral-800">
          <button
            onClick={toggleRunning}
            className="px-3 py-1 rounded-md text-xs font-medium hover:opacity-90 bg-neutral-100 shadow-2xl cursor-pointer"
          >
            {running ? "Pause" : "Play"}
          </button>

          <div className="flex items-center gap-2">
            <label className="text-xs text-neutral-700">Nodes</label>
            <input
              type="range"
              min={0}
              max={200}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-28 cursor-pointer"
            />
            <div className="text-xs text-neutral-700 w-6 text-right">{count}</div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-neutral-700">Connections</label>
            <input
              type="range"
              min={20}
              max={300}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-28 cursor-pointer"
            />
            <div className="text-xs text-neutral-700 w-10 text-right">{distance}px</div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-neutral-700">Speed</label>
            <input
              type="range"
              min={0.1}
              max={3}
              step={0.1}
              value={velScale}
              onChange={(e) => setVelScale(Number(e.target.value))}
              className="w-24 cursor-pointer"
            />
            <div className="text-xs text-neutral-700 w-8 text-right">{velScale}</div>
          </div>

          <select
            value={modeState}
            onChange={(e) => setModeState(e.target.value)}
            className="bg-transparent text-xs outline-none cursor-pointer"
          >
            <option value="wrap" className="p-2 rounded-2xl border">Wrap</option>
            <option value="bounce" className="p-2 rounded-2xl border">Bounce</option>
          </select>

          <button onClick={clearNodes} className="px-2 py-1 rounded-md text-xs cursor-pointer">
            Clear
          </button>
          <button onClick={removeHalf} className="px-2 py-1 rounded-md text-xs cursor-pointer">
            -50%
          </button>
        </div>

        <div className="absolute bottom-3 right-3 text-xs text-neutral-900 p-2 bg-neutral-300 rounded-md border border-neutral-800">
          Click to create a small burst. Move pointer to repel nodes.
        </div>
      </div>
    </div>
  )
}
