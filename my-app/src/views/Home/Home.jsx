import { StyleSheet, View } from "react-native";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import fetchApi from "../../utils/fetch";
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages";

function Home() {
    const [todaysImage, setTodaysImage] = useState({})
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState([])
    useEffect(() => {
        async function loadsTodaysImage() {
            try {
                const todaysImageResponse = await fetchApi()
                setTodaysImage(todaysImageResponse)

            } catch (error) {
                console.error(error);
                setTodaysImage({})
            }

        }

        async function loadsLast5DaysImages() {
            try {
                const date = new Date();
                const todaysDate = format(date, "yyyy-MM-dd")
                const fiveDaysAgo = format(sub(date, { days: 5 }), "yyyy-MM-dd")

                const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgo}&end_date=${todaysDate}`)
               
               
                setLastFiveDaysImages(lastFiveDaysImagesResponse)

            } catch (error) {
                console.error(error);

            }
        }
        loadsTodaysImage().catch(null)
        loadsLast5DaysImages().catch(null)
    }, [])

    console.log(lastFiveDaysImages);
    
    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastFiveDaysImages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
})
export default Home