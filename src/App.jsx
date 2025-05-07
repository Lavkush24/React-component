import { BackgroundChanger } from "./components/BackgroundChanger"
import { ProfileSetup } from "./components/Profile"
import { switchAtom } from "./Atoms"
import { useRecoilValue,RecoilRoot } from "recoil"

function App() {
  return (
    <>
        <RecoilRoot>
          <Dash/>
        </RecoilRoot>
    </>
  )
}





function Dash() {
  const switchValue = useRecoilValue(switchAtom);
  return !switchValue ? <BackgroundChanger/> : <ProfileSetup/>
}

export default App
