<template>
    <div class="d-flex justify-content-center align-items-center min-vh-100">
        <span>Signing out...</span>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { apiSignOut } from "../../functions/api/auth";
import { MessageModal } from "../../functions/api/swal";
import { useUserStore } from "../../stores/user";

const router = useRouter();
const userStore = useUserStore();

onMounted(async () => {
    const token = userStore.getSanctumToken();

    try {
        if (token) {
            await apiSignOut(token);
        }
    } catch (error) {
        if (error.response?.status !== 401) {
            await MessageModal({
                icon: "error",
                title: "Sign out failed",
                text: error.response?.data?.message ?? error.message,
            });
        }
    } finally {
        userStore.reset();
        await router.replace({ name: "auth.signin" });
    }
});
</script>