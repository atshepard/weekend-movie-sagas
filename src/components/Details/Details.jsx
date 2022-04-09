import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardHeader, CardMedia, Button, CardContent } from '@mui/material'

function Details () {
    const movieArray = useSelector(store => store.details);
    const movie = movieArray[0];
    const genres = movieArray.map(movie => movie.name);
    const history = useHistory();

    return(<>
            <Button onClick={() => history.push('/')}>Return to Movie List</Button>
            <Card variant="outlined">
                <CardMedia
                    component="img"
                    height="300"
                    image={movie.poster}
                    alt={movie.title}
                />
                <CardHeader>
                    <h3>{movie.title}</h3>
                </CardHeader>
                <CardContent>
                    <p>{movie.description}</p>
                    <p>GENRES:</p>
                    {genres.map((genre, i) => {
                        return(<li key={i}>{genre}</li>)
                    })}
                </CardContent>
        </Card>
    
    </>)
}

export default Details;