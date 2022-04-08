import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardHeader, CardMedia, CardActionArea } from '@mui/material';

function MovieItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: 'MOVIE_DETAILS', payload: movie});
        history.push("/details");
    }


    return (<>
        <Card variant="outlined">
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