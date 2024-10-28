import { config } from "../../../config/static";
import IntroHeader from "../components/IntroHeader";
import Experiences from "../components/Experiences";
import { Contact } from "../components/Contact";

export const IntroPage = () => {
    const { student, degree, email, points, experiences } = config;
    return (
        <>
			<IntroHeader student={student} degree={degree} points={points} />
			<Experiences experiences={experiences}>
				{/* <p>Children element if needed later</p> */}
			</Experiences>
			<Contact email={email} />
        </>
    )
}