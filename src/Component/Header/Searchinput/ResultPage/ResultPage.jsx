// src/components/ResultsPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResultsPage = () => {


  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((college) => (
          <li key={college._id}>{college.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsPage;
