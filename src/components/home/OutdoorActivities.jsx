import React from "react";
import { Button } from "../../components/ui/Button";
import { motion } from "framer-motion";
import design from "/src/assets/desing.png";
import { Link } from "react-router-dom";
const OutdoorActivities = () => {
  return (
    <section className="mb-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="flex-1 w-full lg:max-w-[600px] xl:max-w-[650px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6 flex justify-center lg:justify-start"
            >
              <span className="text-[#ae7d54] text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 sm:gap-3">
                <img src={design} alt="Design" className="" />
                Welcome to Hotel The Pride
                <img src={design} alt="Design" className="" />
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-[42px] lg:text-5xl xl:text-[52px] leading-tight font-medium font-['Playfair_Display'] mb-6 sm:mb-8 text-center lg:text-left text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Your Comfortable Getaway in the Heart of the City
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Hotel The Pride, we redefine comfort with a blend of modern
              elegance and warm hospitality. Strategically located for both
              business and leisure travelers, our hotel offers a serene and
              inviting atmosphere to make your stay memorable.
            </motion.p>

            <motion.div
              className="space-y-6 sm:space-y-8 sm:items-center mb-10 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start  gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 sm:w-14">
                  <svg
                    width="59"
                    height="51"
                    viewBox="0 0 59 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.63 25.768a.89.89 0 0 0 .716-.363c.852-1.167 8.335-11.535 8.335-16.199 0-4.99-4.06-9.05-9.05-9.05S.58 4.216.58 9.206c0 4.664 7.481 15.033 8.334 16.2a.89.89 0 0 0 .715.362m0-23.841c4.014 0 7.28 3.265 7.28 7.279 0 3.134-4.735 10.528-7.28 14.154-2.544-3.625-7.278-11.018-7.278-14.154 0-4.014 3.264-7.28 7.278-7.28m40.046 45.597a.89.89 0 0 0 .715-.363c.853-1.167 8.334-11.536 8.334-16.2 0-4.99-4.06-9.05-9.05-9.05s-9.05 4.06-9.05 9.05c0 4.665 7.483 15.033 8.335 16.2a.89.89 0 0 0 .716.362m0-23.84c4.014 0 7.278 3.265 7.278 7.279 0 3.134-4.734 10.528-7.278 14.154-2.545-3.626-7.28-11.018-7.28-14.154 0-4.014 3.266-7.28 7.28-7.28"
                      fill="#AE7D54"
                    />
                    <path
                      d="M14.64 9.206a5.015 5.015 0 0 0-5.009-5.01 5.016 5.016 0 0 0-5.01 5.01 5.015 5.015 0 0 0 5.01 5.01 5.015 5.015 0 0 0 5.01-5.01m-8.248 0a3.24 3.24 0 0 1 3.239-3.238 3.24 3.24 0 0 1 3.238 3.238 3.24 3.24 0 0 1-3.238 3.239 3.24 3.24 0 0 1-3.239-3.239M54.684 30.96a5.015 5.015 0 0 0-5.01-5.01 5.016 5.016 0 0 0-5.01 5.01 5.015 5.015 0 0 0 5.01 5.01 5.015 5.015 0 0 0 5.01-5.01m-8.248 0a3.24 3.24 0 0 1 3.239-3.238 3.24 3.24 0 0 1 3.238 3.239 3.24 3.24 0 0 1-3.238 3.238 3.243 3.243 0 0 1-3.239-3.238M4.337 39.292h21.659c.998 0 1.809.812 1.809 1.81a1.81 1.81 0 0 1-1.81 1.81H9.569a3.97 3.97 0 0 0-3.966 3.965 3.97 3.97 0 0 0 3.966 3.966h39.338a.886.886 0 1 0 0-1.771H9.568a2.197 2.197 0 0 1-2.195-2.195c0-1.21.985-2.195 2.195-2.195h16.429a3.584 3.584 0 0 0 3.58-3.58 3.585 3.585 0 0 0-3.58-3.581H4.338a2.293 2.293 0 0 1-2.29-2.29 2.293 2.293 0 0 1 2.29-2.292h27.313a4.476 4.476 0 0 0 4.47-4.47 4.476 4.476 0 0 0-4.47-4.472H15.858a.886.886 0 1 0 0 1.771h15.794c1.489 0 2.7 1.211 2.7 2.7s-1.212 2.7-2.7 2.7H4.34A4.067 4.067 0 0 0 .277 35.23a4.067 4.067 0 0 0 4.062 4.062z"
                      fill="#AE7D54"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Just a 5-minute walk from top institutes like ALLEN, Bansal,
                  Resonance, and Vibrant Academy
                </p>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 sm:w-14">
                  <svg
                    width="63"
                    height="57"
                    viewBox="0 0 63 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63 47.4v-6.3q0-.84-.63-1.575t-1.47-.945v-1.89q0-1.89-1.155-3.465T56.91 31.02V17.16q0-2.31-1.575-3.885T51.45 11.7h-27.3q.42-.21.42-.84t-.84-1.05l-2.31-1.26-1.26-2.31q-.21-.63-1.05-.63t-1.26.63l-1.26 2.31-2.31 1.26q-.63.42-.63 1.05t.21.84h-2.31q-2.31 0-3.885 1.575T6.09 17.16v3.36q0 .21.315.525t.63.315.63-.315.315-.525v-3.36q0-1.47 1.05-2.52t2.52-1.05h5.25l1.05 2.1q.42.84 1.26.84t1.05-.84l1.26-2.1h30.03q1.47 0 2.52 1.05t1.05 2.52v13.65h-2.31v-6.72q0-1.47-1.05-2.625t-2.73-1.155H36.75q-1.68 0-2.73 1.155t-1.05 2.625v6.72h-2.94v-6.72q0-1.47-1.05-2.625t-2.73-1.155H14.07q-1.68 0-2.73 1.155t-1.05 2.625v6.72H7.98v-6.09q0-.42-.315-.63a1.13 1.13 0 0 0-.63-.21q-.315 0-.63.21t-.315.63v6.3q-1.68.63-2.835 2.205T2.1 36.69v1.89q-.84.21-1.47.945T0 41.1v6.3q0 1.05.63 1.785t1.47.945v4.41H.84q-.21 0-.525.21T0 55.38t.315.63.525.21h61.32q.21 0 .525-.21t.315-.63-.315-.63-.525-.21H60.9v-4.41q.84-.21 1.47-.945T63 47.4M20.58 11.91q-.42.21-.63.42l-.84 1.68-1.05-1.68q0-.21-.42-.42l-1.68-.84 1.68-1.05q.42-.21.42-.42l1.05-1.68.84 1.68q.21.21.63.42l1.47 1.05zm-8.4 12.18q0-.63.525-1.26t1.365-.63h12.18q.84 0 1.365.63t.525 1.26v6.72H12.18zm-8.19 12.6q0-1.68 1.26-2.835T8.19 32.7h33.18q.42 0 .63-.315t.21-.735-.21-.63-.63-.21h-6.51v-6.72q0-.63.525-1.26t1.365-.63h12.18q.84 0 1.365.63t.525 1.26v6.72h-5.25q-.21 0-.525.21t-.315.63.315.735.525.315h9.24q1.68 0 2.94 1.155t1.26 2.835v1.68H3.99zm-2.1 4.41q0-.21.21-.525t.63-.315h57.54q.42 0 .63.315t.21.525v2.52H1.89zm6.09 13.44H3.99v-4.41h3.99zm51.03 0h-3.99v-4.41h3.99zm1.26-6.09H21.21q-.42 0-.735.21t-.315.63.315.63.735.21h32.13v4.41H9.66v-4.41h7.14q.42 0 .735-.21t.315-.63-.315-.63-.735-.21H2.73q-.42 0-.63-.315t-.21-.735v-1.89h59.22v1.89q0 .42-.21.735t-.63.315M25.2 4.98h1.05v1.05q0 .42.21.735t.63.315.63-.315.21-.735V4.98h1.05q.42 0 .735-.21t.315-.63-.315-.735a1 1 0 0 0-.735-.315h-1.05v-.84q0-.42-.21-.735t-.63-.315-.63.315-.21.735v.84H25.2q-.42 0-.735.315t-.315.735.315.63.735.21m8.4 4.2h.42v.42q0 .42.315.63t.63.21.63-.21.315-.63v-.42h.42q.42 0 .63-.21t.21-.63-.21-.735-.63-.315h-.42v-.21q0-.42-.315-.735t-.63-.315-.63.315-.315.735v.21h-.42q-.42 0-.63.315t-.21.735.21.63.63.21m6.72-2.73L42 7.5l1.05 1.68q.42.84 1.05.84.84 0 1.26-.84l1.05-1.68 1.68-1.05q.63-.21.63-1.05t-.63-1.26l-1.68-1.05-1.05-1.68Q44.94.78 44.1.78q-.63 0-1.05.63L42 3.09l-1.68 1.05q-.84.42-.84 1.26t.84 1.05m2.73-1.68q.42-.21.63-.63l.42-1.05.63 1.05q.21.42.63.63l1.05.63-1.05.63q-.42 0-.63.42L44.1 7.5l-.42-1.05q-.21-.42-.63-.42L42 5.4z"
                      fill="#AE7D54"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Relax in spacious rooms with large beds, cozy mattresses, and
                  soft cotton sheets
                </p>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 sm:w-14">
                  <svg
                    width="54"
                    height="57"
                    viewBox="0 0 54 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="a"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="54"
                      height="57"
                    >
                      <path d="M.832.78h52.336v55.764H.832z" fill="#fff" />
                    </mask>
                    <g mask="url(#a)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.035 48.295c-1.918.375-3.366 2.041-3.366 4.036 0 2.272 1.876 4.117 4.188 4.117 2.031 0 3.726-1.424 4.108-3.31h26.654a.815.815 0 0 0 .822-.807.816.816 0 0 0-.822-.807H15.965c-.33-1.625-1.633-2.906-3.287-3.229V40.2a.815.815 0 0 0-.82-.808.815.815 0 0 0-.823.808zm37.035 0c-1.918.375-3.367 2.041-3.367 4.036 0 2.272 1.877 4.117 4.19 4.117 2.31 0 4.188-1.845 4.188-4.117 0-1.995-1.448-3.66-3.367-4.036V40.2a.815.815 0 0 0-.822-.808.816.816 0 0 0-.822.808zm-36.213 1.536c1.405 0 2.545 1.12 2.545 2.5 0 1.381-1.14 2.502-2.545 2.502s-2.545-1.12-2.545-2.502c0-1.38 1.14-2.5 2.545-2.5m37.035 0c1.404 0 2.545 1.12 2.545 2.5 0 1.381-1.14 2.502-2.545 2.502s-2.546-1.12-2.546-2.502c0-1.38 1.142-2.5 2.546-2.5M14.1 45.418h32.598a.815.815 0 0 0 .821-.807.815.815 0 0 0-.822-.808H14.102a.815.815 0 0 0-.822.808c0 .446.368.808.822.808M4.6 9.078h8.678v9.358h-4.79a.814.814 0 0 0-.821.808v14.901c0 2.82 2.329 5.109 5.198 5.109 2.625 0 4.8-1.917 5.15-4.404a.8.8 0 0 0 .048-.275c0-1.928 1.594-3.495 3.556-3.495s3.555 1.567 3.555 3.495q.001.146.05.275c.35 2.487 2.524 4.404 5.15 4.404 2.625 0 4.797-1.917 5.147-4.404a.8.8 0 0 0 .05-.275c0-1.928 1.593-3.495 3.555-3.495s3.556 1.567 3.556 3.495q0 .146.05.275c.35 2.487 2.523 4.404 5.149 4.404 2.869 0 5.198-2.29 5.198-5.109V19.244a.814.814 0 0 0-.821-.808H14.923V8.27a.814.814 0 0 0-.822-.807H4.68a1.97 1.97 0 0 0-1.828-1.214C1.763 6.249.88 7.117.88 8.187s.883 1.938 1.972 1.938c.76 0 1.423-.425 1.751-1.047m4.71 25.066c0 1.928 1.593 3.495 3.555 3.495s3.555-1.567 3.555-3.495v-7.18c0-.445.368-.807.822-.807s.821.362.821.808v3.884a5.23 5.23 0 0 1 3.556-1.384c1.374 0 2.625.525 3.555 1.384v-3.884c0-.446.369-.808.822-.808.454 0 .822.362.822.808v7.18c0 1.927 1.592 3.494 3.555 3.494 1.962 0 3.555-1.567 3.555-3.495v-7.18c0-.445.369-.807.821-.807.454 0 .822.362.822.808v3.884a5.23 5.23 0 0 1 3.555-1.384c1.375 0 2.625.525 3.556 1.384v-3.884c0-.446.368-.808.821-.808.454 0 .822.362.822.808v7.18c0 1.927 1.593 3.494 3.556 3.494 1.961 0 3.555-1.567 3.555-3.495V20.05H9.311zm13.767-16.3h24.69a.814.814 0 0 0 .822-.806.815.815 0 0 0-.822-.808H23.08a.816.816 0 0 0-.822.808c0 .445.369.807.821.807M34.13 4.125c-5.424.655-9.627 5.203-9.627 10.708 0 .446.367.807.821.807a.814.814 0 0 0 .822-.807c0-5.064 4.182-9.175 9.336-9.175 5.151 0 9.334 4.11 9.334 9.175 0 .446.367.807.822.807a.814.814 0 0 0 .82-.807c0-5.539-4.255-10.107-9.725-10.72.39-.349.636-.853.636-1.412 0-1.055-.871-1.91-1.945-1.91-1.073 0-1.943.855-1.943 1.91 0 .565.251 1.074.65 1.423"
                        fill="#AE7D54"
                      />
                    </g>
                  </svg>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Enjoy 24/7 room service including housekeeping, laundry, food
                  delivery, and coffee on request.
                </p>
              </div>
            </motion.div>

            <Link to="/about">
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {/* <Button className="bg-amber-700 hover:bg-amber-800 text-white text-sm sm:text-base px-8 py-4 sm:px-10 sm:py-5">
                DISCOVER MORE
              </Button> */}
                <Link to="/about">
                  <Button onClick={() => console.log("Clicked!")}>
                    DISCOVER MORE
                  </Button>
                </Link>
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <img
                src="/src/assets/Component 1.png"
                alt="Hotel interior"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorActivities;
