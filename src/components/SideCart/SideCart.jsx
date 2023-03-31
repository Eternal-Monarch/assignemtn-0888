import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// eslint-disable-next-line no-unused-vars
const SideCart = ({ cartData, handleSelect, handleClearAll }) => {
  let totalCost = 0;
  let totalCost2 = 0;
  let newTotalReadTime = 0;

  for (const data of cartData) {
    totalCost += data.price;
  }

  for (const data2 of cartData) {
    totalCost2 += data2.price;
  }

  return (
    <div className="p-4 md:sticky md:top-0">
      <div
        style={{
          border: "5px solid blue",
          borderRadius: "10px",
          display: "inline-block",
          margin: "0 auto",
          textAlign: "center",
          boxSizing: "border-box",
          right: "15px",
          left: "15px",
          width: "515px",
          height: "80px",
          padding: "10px",
          verticalAlign: "middle",
          background: "rgba(96, 71, 236, 0.1)",
          border: "1px solid #6047EC",
          borderRadius: "8px",
        }}
      >
        {cartData.length > 0 ? (
          <p className="text-2xl font-bold text-center mb-8">
            Spent time on read: {totalCost2} min
          </p>
        ) : (
          ""
        )}
      </div>

      <h1
        className="text-2xl font-bold text-center mb-12"
        style={{ marginTop: "25px" }}
      >
        Bookmarked Blogs: {cartData.length}
      </h1>

      {/* <p>{cartData.length}</p> */}

      {cartData.map((data, index) => (
        <div
          key={index}
          className="flex align-middle gap-12 mb-6"
          style={{
            position: "relative",
            width: "100%",
            background: "#FFFFFF",
            height: "80px",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <div
            style={{ display: "flex", fontSize: "20px", alignItems: "center" }}
          >
            <p>{index + 1}.</p>

            <p>{data.about} </p>
          </div>
        </div>
      ))}
      <div className="mt-12">
        {cartData.length > 0 ? (
          <button
            onClick={() => handleClearAll()}
            type="button"
            className="w-full btn btn-xs rounded-md"
          >
            Clear All
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SideCart;