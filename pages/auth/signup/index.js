import { Signup } from "../../../components/signup/signup";
import { Auth } from "../../../components/auth/auth";

export default function SignupPage() {
    return (
        <Auth>
            <Signup />
        </Auth>
    );
}