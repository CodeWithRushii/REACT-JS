import axios from "axios";

export const translate = async (input: string, source: string, target: string) => {
    const res = await axios.post(
        "https://deep-translate1.p.rapidapi.com/language/translate/v2",
        {
            "q": input,
            "source": source,
            "target": target
        },
        {
            headers: {
                'x-rapidapi-key': '0c0734de4dmsh7147fa792cf0523p1e6620jsn33880cadd1cd',
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
                'Content-Type': 'application/json'
            },

        }
    );
    return res.data.data.translations.translatedText[0];
}
