
import { Auth } from "../../../components/auth/auth";
import { ForgotPassword } from "../../../components/forgot-password/forgot-password";

export default function ForgotPasswordPage() {
    return (
        <Auth>
            <ForgotPassword />
        </Auth>
    );
}