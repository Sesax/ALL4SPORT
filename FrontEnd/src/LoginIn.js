import {Grid, Paper} from '@mui/material'

function LoginIn() {
    return(
        <Grid>
            <Paper elevation={10} 
            style={{
                padding:20,
                height:'70vh',
                width:280,
                margin: 'auto'
                }}>
                <Grid align="center">
                    <h2>Se connecter</h2>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default LoginIn

