import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { cheerfulFiestaPalette } from "@mui/x-charts/colorPalettes";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

export default function Charts({ filter }) {
  const [isHidden, setIsHidden] = React.useState(true);
  const chartTitle = "Répartition des calories par recette";
  return (
    <Stack>
      <Typography variant="h6">{chartTitle}</Typography>
      <FormControlLabel
        checked={isHidden}
        control={
          <Checkbox onChange={(event) => setIsHidden(event.target.checked)} />
        }
        label="Cacher la légende"
        labelPlacement="start"
      />
      <PieChart
        title={chartTitle}
        margin={
          isHidden === false
            ? { top: 300, bottom: 100, left: 100, right: 100 }
            : { top: 0, bottom: 0, left: 0, right: 0 }
        }
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "middle" },
            padding: 0,

            hidden: isHidden,
            labelStyle: {
              fontSize: 12,
            },
          },
          itemMarkWidth: 10,
          itemMarkHeight: 4,
          markGap: 5,
          itemGap: 6,
        }}
        colors={cheerfulFiestaPalette}
        series={[
          {
            data: filter.map((card, index) => ({
              id: index,
              value: Math.floor(card.recipe.calories), // Ici, on suppose que la valeur du graphique est basée sur les calories
              label: card.recipe.label,
            })),
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={isHidden === true ? 400 : 800}
      />
    </Stack>
  );
}
