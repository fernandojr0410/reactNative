import { TouchableOpacity, Image, StyleSheet } from "react-native"


export const MovieCards = (props) => {
     return(
<TouchableOpacity>
    <Image style={styles.img} source={props.movieURL}/>
</TouchableOpacity>
     )
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 20, 
    }
})