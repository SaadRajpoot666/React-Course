export function EnvironmentVariables(){
    const website  = import.meta.env.VITE_URL
    return <a href=" https://kstraders.netlify.app/"> {website} </a>
}