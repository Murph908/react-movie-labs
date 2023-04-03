import React, { useEffect, useState }  from "react";
import { getMovieSimilars } from "../../api/tmdb-api";
import Grid from "@mui/material/Grid";

export default function MovieSimilars({ movie }) {
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    getMovieSimilars(movie.id).then((similars) => {
      setSimilars(similars);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
  <Grid container spacing={1} alignItems="center" justifyContent="center">
    {similars.map((s) => (
  <Grid item key={s.id} xs={8}>
  <Grid item xs={4} sx={{ padding: '10px', color: "#9c27b0" }} >
    {s.original_title}
  </Grid>
  <Grid item xs={16} sx={{ padding: '10px' }}>
    {s.overview}
  </Grid>
</Grid>
    ))}
</Grid>
  );

}