"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 95%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="pt-20" ref={containerRef}>
      {/* Header */}
      <div className="sticky top-15 z-15 w-full bg-midnight/80 backdrop-blur-md py-6 mb-10 border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
            My Educational Journey
          </h2>
        </div>
      </div>

      {/* Contained content */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex">
          <div ref={ref} className="relative flex-1 pl-7 pb-20">
            {/* Timeline Line */}
            <div className="absolute md:left-8.5 left-6 -top-10 h-full w-1 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-purple-500 via-lavender to-transparent"
              />
            </div>

            {data.map((item, index) => (
              <motion.div
                id={`timeline-item-${index}`}
                key={index}
                className="relative group pt-20 md:pt-28"
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ margin: "-30% 0px -30% 0px" }}
              >
                <div className="flex">
                  <div className="relative z-10 w-16 shrink-0">
                    <div className="sticky pr-12 top-1/2 h-0 flex items-center justify-center">
                      <motion.div
                        className={`w-5 h-5 rounded-full border-2 transition-all duration-300 relative ${
                          activeIndex === index
                            ? "bg-purple-500 border-purple-300 scale-125 shadow-[0_0_15px_3px_rgba(168,85,247,0.5)]"
                            : "bg-midnight border-neutral-600 group-hover:border-purple-400"
                        }`}
                        whileHover={{ scale: 1.2 }}
                      >
                        {activeIndex === index && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-purple-500/30 -z-10"
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ scale: 2.5, opacity: 0.5 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    className={`ml-4 md:ml-8 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-gradient-to-br from-purple-900/70 via-indigo-900/70 to-neutral-900/70 border border-white/10 shadow-xl shadow-purple-900/20"
                        : "bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-neutral-900/30 border border-transparent group-hover:bg-neutral-800/40"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                        <p className="text-sm font-mono text-purple-400">
                          {item.date}
                        </p>
                        <span className="hidden md:block text-neutral-600">•</span>
                        <p className="text-sm font-medium text-neutral-400">
                          {item.institute}
                        </p>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-2">
                        {item.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {item.contents.map((content, contentIndex) => (
                        <motion.p
                          key={contentIndex}
                          className={`text-neutral-300 pl-6 relative ${
                            content.startsWith("✅") ? "flex items-start gap-2" : ""
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: contentIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {content.startsWith("✅") ? (
                            <>
                              <span className="absolute left-0 top-1 text-purple-400">
                                ✓
                              </span>
                              {content.substring(1)}
                            </>
                          ) : (
                            <>
                              <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-600"></span>
                              {content}
                            </>
                          )}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};