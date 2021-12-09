import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config";

const ListVideos = () => {
  const url = app_config.api_url;

  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = () => {
    fetch(url + "/video/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideoData(data);
        setLoading(false);
      });
  };

  const displayVideos = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {videoData.map((video) => (
            <Grid item md={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={url + "/" + video.thumbnail}
                  height="200"
                />
                <CardContent>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <Link
                    to={"/view/" + video._id}
                    component={Button}
                    variant="contained"
                    color="primary"
                  >
                    Play Video
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <Paper>
      <header style={{ height: "20rem" }}></header>
      <h3>All Videos</h3>

      <Container> maxWidth="xl"{displayVideos()}</Container>
    </Paper>
  );
};

export default ListVideos;