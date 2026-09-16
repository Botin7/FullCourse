import Signin from "../components/auth/SignIn.vue";
import Signout from "../components/auth/SignOut.vue";
import Signup from "../components/auth/SignUp.vue";
import Dashboard from "../components/auth/Dashboard.vue";
import VerifyEmail from "../components/auth/VerifyEmail.vue";
import ResetPassword from "../components/auth/ResetPassword.vue";
import SetNewPassword from "../components/auth/SetNewPassword.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "auth.signin",
            component: Signin,
            meta: { guarded: false },
        },
        {
            path: "/signout",
            name: "auth.signout",
            component: Signout,
        },
        {
            path: "/signup",
            name: "auth.signup",
            component: Signup,
            meta: { guarded: false },
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            meta: { guarded: true },
        },
        {
            path: "/verify/email",
            name: "auth.verify.email",
            component: VerifyEmail,
            meta: { guarded: false },
        },
                {
            path: "/reset-password",
            name: "auth.reset-password",
            component: ResetPassword,
            meta: { guarded: false },
        },
                {
            path: "/set-new-password",
            name: "auth.set-new-password",
            component: SetNewPassword,
            meta: { guarded: false },
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/dashboard",
        },
    ],
});

export default router;