import React, { useEffect, useState } from "react";
import PieChart from "../asset/pie-chart.jpeg";
import "./dashboard.css";
import FormPage from "./FormPage";
function Dashboard() {
  const [isSticky, setIsSticky] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > window.innerHeight) {
        setIsSticky(true);
        setShowForm(true); // Show form when scrolling beyond 100vh
      } else if (
        currentScrollY < prevScrollY &&
        currentScrollY < window.innerHeight
      ) {
        setIsSticky(false);
        setShowForm(false); // Hide form when scrolling within 100vh
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <div className="page-2">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "1rem",
              marginLeft: "8rem",
            }}
          >
            <h1>Investment Highlights</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                src={PieChart}
                style={{ height: "30px", width: "30px" }}
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyCpxontent: "center",
                  alignItems: "center",
                }}
              >
                <span>Rs10.80L</span>
                <span>Per Share</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                src={PieChart}
                style={{ height: "30px", width: "30px" }}
              ></img>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <span>6%p.a</span>
                <span style={{ color: "gray" }}>Every Year</span>
                <span>Rental Yield</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                src={PieChart}
                style={{ height: "30px", width: "30px" }}
              ></img>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Rs10.80L</span>
                <span>Per Share</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                src={PieChart}
                style={{ height: "30px", width: "30px" }}
              ></img>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Rs10.80L</span>
                <span>Per Share</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "2rem",
            marginBottom: "4rem",
            marginLeft: "8rem",
            gap: "2rem",
            color: "gray",
          }}
        >
          <span>*Based on assumption, actual may vary</span>
          <span>**To be used at Inara within an year.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "-12vw",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h1>Asset Overview</h1>
          <h1>Milestone</h1>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <table>
              <thead style={{ padding: "0.5rem" }}>
                <tr>
                  <th>Configuration</th>
                  <th>Usable Carpet Area (in Sq feet)</th>
                  <th>No. of Units</th>
                  <th>Total Usable Carpet (in Sq feet)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Studio</td>
                  <td>345</td>
                  <td>17</td>
                  <td>5,865</td>
                </tr>
                <tr>
                  <td>1BHK</td>
                  <td>475</td>
                  <td>18</td>
                  <td>8,550</td>
                </tr>
                <tr>
                  <td>1BHK Garden Flat</td>
                  <td>718</td>
                  <td>4</td>
                  <td>2,872</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th></th>
                  <th>39</th>
                  <th>17,287</th>
                </tr>
              </tfoot>
            </table>
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                marginLeft: "3vw",
                marginTop: "-2vh",
                width: "35vw",
                height: "50vh",
                marginRight: "3vw",
              }}
            >
              <ul class="steps">
                <li class="step">
                  <div class="dates">
                    <span class="time">15th Dec, 2023</span>
                  </div>
                  <div class="step-context">
                    <span class="step-heading">Asset Identified</span>
                  </div>
                </li>
                <li class="step">
                  <div class="dates">
                    <span class="time">18th Feb, 2024</span>
                  </div>
                  <div class="step-context">
                    <span class="step-heading">Opportunity Launched</span>
                  </div>
                </li>
                <li class="step">
                  <div class="dates">
                    <span class="time">15th Apr, 2024</span>
                  </div>
                  <div class="step-context">
                    <span class="step-heading">
                      Developer Work Interior Work Commencement
                    </span>
                  </div>
                </li>
                <li class="step">
                  <div class="dates">
                    <span class="time" style={{ marginLeft: "0.7rem" }}>
                      {" "}
                      1st Jul , 2024{" "}
                    </span>
                  </div>
                  <div class="step-context">
                    <span class="step-heading">
                      Project Handover & Rent Commencement
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="popup-overlay">
          <div className="popup">
            <FormPage />
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
