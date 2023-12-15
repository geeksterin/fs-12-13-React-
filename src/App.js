import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Content from "./Components/Content";
import ColorCard from "./Components/ColorCard";

function App() {
  let userName = "Mark";
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
 
        <ColorCard colorCode="#FF6663" colorName="PINK" />
        <ColorCard colorCode="#ffffff" colorName="White" />
        <ColorCard colorCode="#38ba15" colorName="Green" />
        <ColorCard colorCode="#fe7e00" colorName="Orange" />
        <ColorCard colorCode="#303020" colorName="Dark Blue" />
      </div>
      {/* <Content
        userName="Divyansh"
        mobNo="9999999999"
        age={30}
        hasDrivingLicense={true}
        // marks={[90, 75, 70]}
        marks={[
          {
            science: 90,
          },
          {
            mathematics: 85,
          },
        ]}
        completeAddress={{
          addressLine1: "123 ABC Colony",
          addressLine2: "Near XYZ Place",
          city: "Indore",
          state: "Madhya Pradesh",
          country: "India",
        }}
      /> */}
      {/* <Content
        userName="John"
        address="456, XYZ Colony"
        mobNo="1111111111"
        age={40}
        hasDrivingLicense={false}
      />
      <Content
        userName="Peter"
        address="789, ASDF Colony"
        mobNo="5555555555"
        age={40}
        hasDrivingLicense={false}
      /> */}
    </div>
  );
}

export default App;
