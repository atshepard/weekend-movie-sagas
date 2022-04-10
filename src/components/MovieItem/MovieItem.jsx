import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardHeader, CardMedia, CardActionArea } from '@mui/material';

function MovieItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    //on click of any action area, send the user to the details page for that movie
    const handleClick = () => {
        dispatch({ type: 'MOVIE_DETAILS', payload: movie });
        history.push("/details");
    }

    //renders each individual movie item on the dom as a card
    return (<>
        <Card variant="outlined"
            sx={{ boxShadow: 1 }}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="300"
                    image={movie.poster}
                    alt={movie.title}
                />
                <CardHeader>
                    <h3>{movie.title}</h3>
                </CardHeader>
            </CardActionArea>
        </Card>
    </>)
}

export default MovieItem;