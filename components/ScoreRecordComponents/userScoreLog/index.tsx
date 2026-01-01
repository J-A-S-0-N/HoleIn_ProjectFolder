import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ScoreCardComponent from "./scoreCardComponent";
import db  from "@/firebase/_firebase";
import { collection, limit, orderBy, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { fetchUsername } from "@/contexts/UserContext";

export default function index({ ListHeaderComponent }: { ListHeaderComponent?: React.ReactElement }) {
    const fetchUserScores = async () => {
        try {
            //get user id from usercontext
            const user = await fetchUsername();

            if (!user) throw new Error("User not logged in");

            console.log("!!!!!!!!");
            console.log(user);
            console.log("!!!!!!!!");

            // Build query: get latest 10 games for this user
            const scoresQuery = query(
                collection(db, "post"),
                where("username", "==", user),
                //limit(10)
            );

            const querySnapshot = await getDocs(scoresQuery);

            // Map docs to array of score data
            const scores = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log("!!!!!!!!");
            console.log(scores);
            console.log("!!!!!!!!");

            return scores; // Array of scores
        } catch (error) {
            console.error("Error fetching scores:", error);
            return [];
        }
    };

    const [testLogs, setTestLogs] = useState([
        { hole1: 30, hole2: 10, hole3: 50, hole4: 40, hole5: 35, hole6: 25, hole7: 45, hole8: 30, hole9: 20, hole10: 15, hole11: 55, hole12: 40, hole13: 35, hole14: 25, hole15: 30, hole16: 20, hole17: 45, hole18: 50, score: 10, time: "2025-12-22 10:00", location: "올림픽공원 파크골프장", isNineHole: false },
        { hole1: 30, hole2: 10, hole3: 50, hole4: 40, hole5: 35, hole6: 25, hole7: 45, hole8: 30, hole9: 20, hole10: 15, hole11: 55, hole12: 40, hole13: 35, hole14: 25, hole15: 30, hole16: 20, hole17: 45, hole18: 50, score: 10, time: "2025-12-22 10:00", location: "올림픽공원 파크골프장", isNineHole: true },
    ]);
    /*
    actual value
    const [testLogs, setTestLogs] = useState([
        {username: "test", createdAt: "2025-12-22 10:00", location: "올림픽공원 파크골프장", isNineHole: true, hole1: 30, hole2: 10, hole3: 50, hole4: 40, hole5: 35, hole6: 25, hole7: 45, hole8: 30, hole9: 20, hole10: 15, hole11: 55, hole12: 40, hole13: 35, hole14: 25, hole15: 30, hole16: 20, hole17: 45, hole18: 50},
    ]);
    */

    useEffect(() => {
        //fetch values from firebase firestore
        fetchUserScores().then((scores: any) => {
            setTestLogs(scores);
        });
    }, [])

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View
                style={{marginBottom: 20}}
            >
                <ScoreCardComponent item={item} />
            </View>
        );
    }

    return (
        <FlatList
            data={testLogs}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={ListHeaderComponent}
        />
    );
}
