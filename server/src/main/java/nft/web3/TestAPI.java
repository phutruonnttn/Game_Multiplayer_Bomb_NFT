package nft.web3;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import org.apache.http.client.HttpClient;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class TestAPI {
    public static void main(String[] args) {

//        try {
//            //Public API:
//            //https://www.metaweather.com/api/location/search/?query=<CITY>
//            //https://www.metaweather.com/api/location/44418/
//
//            URL url = new URL("https://www.metaweather.com/api/location/search/?query=London");
//
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setRequestMethod("GET");
//            conn.connect();
//
//            //Check if connect is made
//            int responseCode = conn.getResponseCode();
//
//            // 200 OK
//            if (responseCode != 200) {
//                throw new RuntimeException("HttpResponseCode: " + responseCode);
//            } else {
//
//                StringBuilder informationString = new StringBuilder();
//                Scanner scanner = new Scanner(url.openStream());
//
//                while (scanner.hasNext()) {
//                    informationString.append(scanner.nextLine());
//                }
//                //Close the scanner
//                scanner.close();
//
//                System.out.println(informationString);
//
//
//                //JSON simple library Setup with Maven is used to convert strings to JSON
//                JSONParser parse = new JSONParser();
//                JSONArray dataObject = (JSONArray) parse.parse(String.valueOf(informationString));
//
//                //Get the first JSON object in the JSON array
//                System.out.println(dataObject.get(0));
//
//                JSONObject countryData = (JSONObject) dataObject.get(0);
//
//                System.out.println(countryData.get("woeid"));
//
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }

    }
}
