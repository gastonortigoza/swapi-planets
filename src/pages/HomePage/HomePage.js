import React from "react";
import PlanetList from "../../features/planets/PlanetsList";
import MainLayout from "../../layout/MainLayout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Lista de Planetas</h1>
      <PlanetList />
    </MainLayout>
  );
};

export default HomePage;
