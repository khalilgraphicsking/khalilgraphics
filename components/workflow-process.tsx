"use client"

import { motion } from "framer-motion"

const workflowSteps = [
  {
    number: "01",
    title: "Research & Strategy",
    description: "Understand brand goals, audience, and competitors.",
  },
  {
    number: "02",
    title: "Concept & Design",
    description: "Create initial sketches, layouts, and design elements.",
  },
  {
    number: "03",
    title: "Refinement & Feedback",
    description: "Iterate based on feedback and fine-tune details.",
  },
  {
    number: "04",
    title: "Finalization & Delivery",
    description: "Provide final assets with guidelines for implementation.",
  },
]

export default function WorkflowProcess() {
  return (
    <div className="w-full bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90 py-20 rounded-xl">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My simple 4-step
          <br />
          Workflow process
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-3xl font-bold text-blue-500 mb-4 block">{step.number}</span>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-zinc-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
