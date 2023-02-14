import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

import { FirstQuestion } from "../pages/FirstQuestion";
import { SecondQuestion } from "../pages/SecondQuestion";
import { ThirdQuestion } from "../pages/ThirdQuestion";
import { ForthQuestion } from "../pages/ForthQuestion";
import { FifthQuestion } from "../pages/FifthQuestion";
import { SixthQuestion } from "../pages/SixthQuestion";
import { SeventhQuestion } from "../pages/SeventhQuestion";

export const AplicationRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('first-question');
  }, [])

  return (
    <Routes>
      <Route path="/first-question" element={<FirstQuestion />} />
      <Route path="/second-question" element={<SecondQuestion />} />
      <Route path="/third-question" element={<ThirdQuestion />} />
      <Route path="/forth-question" element={<ForthQuestion />} />
      <Route path="/fifth-question" element={<FifthQuestion />} />
      <Route path="/sixth-question" element={<SixthQuestion />} />
      <Route path="/seventh-question" element={<SeventhQuestion />} />
    </Routes>
  );
};
