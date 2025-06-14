import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
  features = [],
  challenges = [],
  lessons = [],
  demoUrl = "",
  screenshots = [image], // New prop for multiple screenshots
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Combine main image with additional screenshots if provided
  const allImages = [image, ...screenshots].filter(Boolean);

  // Auto-advance carousel effect
  useEffect(() => {
    if (!isAutoPlaying || allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [allImages.length, isAutoPlaying]);

  const handleViewProject = () => {
    if (href) window.open(href, "_blank");
  };

  const handleViewDemo = () => {
    if (demoUrl) window.open(demoUrl, "_blank");
  };

  const goToNextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const goToPrevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const goToImage = (index) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-gray-900 shadow-2xl border border-gray-700"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute z-20 p-2 top-4 right-4 text-gray-400 bg-gray-900/50 rounded-full hover:bg-gray-800 transition-all hover:text-white"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Enhanced Image Carousel Section */}
        <div
          className="relative aspect-video bg-gray-800 overflow-hidden cursor-pointer"
          onClick={goToNextImage}
        >
          <AnimatePresence mode="wait" custom={currentImageIndex}>
            <motion.img
              key={currentImageIndex}
              src={allImages[currentImageIndex]}
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              className="absolute inset-0 object-contain w-full h-full"
              custom={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevImage();
                }}
                className="absolute left-4 top-1/2 p-2 -translate-y-1/2 bg-gray-900/50 rounded-full hover:bg-gray-800 transition-all z-10"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
                className="absolute right-4 top-1/2 p-2 -translate-y-1/2 bg-gray-900/50 rounded-full hover:bg-gray-800 transition-all z-10"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Indicators (dots) */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToImage(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View screenshot ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Auto-play toggle */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsAutoPlaying(!isAutoPlaying);
              }}
              className="absolute top-4 left-4 p-1.5 bg-gray-900/50 rounded-full hover:bg-gray-800 transition-all z-10"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isAutoPlaying ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col justify-between gap-6 mb-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {title}
              </h2>
              <p className="mt-2 text-gray-300">{description}</p>
            </div>

            <div className="flex gap-2">
              {demoUrl && (
                <button
                  onClick={handleViewDemo}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                >
                  Live Demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              )}
              <button
                onClick={handleViewProject}
                disabled={!href}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  href
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-700 cursor-not-allowed text-gray-400"
                }`}
              >
                View Code
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-6 overflow-x-auto border-b border-gray-700 hide-scrollbar">
            {[
              { id: "overview", label: "Overview" },
              { id: "features", label: "Features" },
              { id: "challenges", label: "Challenges" },
              { id: "lessons", label: "Lessons" },
              { id: "tech", label: "Tech Stack" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium capitalize transition-all ${
                  activeTab === tab.id
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Project Overview
                    </h3>
                    <ul className="space-y-3">
                      {subDescription.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 mt-1 mr-3 text-blue-400">
                            ▹
                          </span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "features" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {features.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 mt-1 mr-3 text-blue-400">
                            ▹
                          </span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "challenges" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Challenges & Solutions
                    </h3>
                    {challenges.length > 0 ? (
                      <ul className="space-y-4">
                        {challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 mt-1 mr-3 text-red-400">
                              ⚠️
                            </span>
                            <div>
                              <h4 className="font-medium text-gray-200">
                                {challenge.title}
                              </h4>
                              <p className="mt-1 text-sm text-gray-400">
                                {challenge.description}
                              </p>
                              {challenge.solution && (
                                <div className="p-2 mt-2 text-sm rounded bg-gray-800/50">
                                  <span className="font-medium text-green-400">
                                    Solution:
                                  </span>{" "}
                                  {challenge.solution}
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400">
                        No challenge details available
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "lessons" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Lessons Learned
                    </h3>
                    {lessons.length > 0 ? (
                      <div className="grid gap-4 md:grid-cols-2">
                        {lessons.map((lesson, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all"
                          >
                            <div className="flex items-center mb-2">
                              <span className="flex items-center justify-center w-8 h-8 mr-3 text-lg rounded-full bg-blue-900/50 text-blue-400">
                                {index + 1}
                              </span>
                              <h4 className="font-medium text-gray-200">
                                {lesson}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400">No lessons documented</p>
                    )}
                  </div>
                )}

                {activeTab === "tech" && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {tags.map((tag) => (
                        <div
                          key={tag.id}
                          className="flex items-center px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all"
                        >
                          <img
                            src={tag.path}
                            alt={tag.name}
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-sm font-medium text-gray-300">
                            {tag.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
