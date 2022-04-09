import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardHeader, CardMedia, Button, CardContent } from '@mui/material'

function Details () {
    const movieArray = useSelector(store => store.details);
    const movie = movieArray[0];
    const history = useHistory();

    console.log(movieArray, movie);
    return(<>
            <Button>Return to Movie List</Button>
            <Card variant="outlined">
                {/* <CardMedia
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

                </CardContent> */}
        </Card>
    
    </>)
}

export default Details;