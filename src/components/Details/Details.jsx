import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardHeader, CardMedia, Button, CardContent } from '@mui/material'
import { useEffect } from "react";

function Details() {
    const movieArray = useSelector(store => store.details);
    const movie = movieArray[0];
    const genres = movieArray.map(movie => movie.name);
    const history = useHistory();

    // useEffect(() => {
    //     console.log('logging movieArray, movie: ', movieArray, movie);
    // }, []);

    console.log('logging movieArray, movie: ', movieArray, movie);

    return (<>
        <Button onClick={() => history.push('/')}>Return to Movie List</Button>
        <div className="detailContainer">
            <Card
                variant="outlined">
                <CardMedia
                    component="img"
                    height="500px"
                    image={movie?.poster}
                    alt={movie?.title}
                />
                <CardHeader>
                    <h3>{movie?.title}</h3>
                </CardHeader>
                <CardContent>
                    <p>{movie?.description}</p>
                    <p>GENRES:</p>
                    {genres.map((genre, i) => {
                        return (<li key={i}>{genre}</li>)
                    })}
                </CardContent>
            </Card>
        </div>

    </>)
}

export default Details;