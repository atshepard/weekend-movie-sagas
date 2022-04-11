import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardHeader, CardMedia, Button, CardContent } from '@mui/material'

function Details() {
    //parses data from redux for dom display:
    //data needs to be parsed because I grabbed all the movie data in addition to the genre data because
    //I have AMBITION to learn more sql...with middling results
    //it would have been cleaner to just grab the genres for this specific movie

    const movieArray = useSelector(store => store.details);
    const movie = movieArray[0];
    const genres = movieArray.map(movie => movie.name);
    const history = useHistory();

    // console.log('logging movieArray, movie: ', movieArray, movie);

    return (<>
        <Button onClick={() => history.push('/')}>Return to Movie List</Button>
        <div className="detailContainer">
            <Card
                variant="outlined">
                <CardMedia
                    component="img"
                    image={movie?.poster}
                    alt={movie?.title}
                />
                <CardHeader>
                    <h3>{movie?.title}</h3>
                </CardHeader>
                <CardContent>
                    <p>{movie?.description}</p>
                    <p>GENRES:
                        {genres.map((genre) => {
                            return (<span>| {genre} |</span>)
                        })}</p>
                </CardContent>
            </Card>
        </div>

    </>)
}

export default Details;