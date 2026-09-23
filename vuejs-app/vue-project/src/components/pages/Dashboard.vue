<template>
  <div class="wrapper">
    <div class="content-wrapper" style="min-height: 1175px;">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Dashboard</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="alert alert-success" role="alert">
                     {{ userStore.name }}
                          <br />
                     {{ userStore.email }}
                          <br />
                         You are logged in successfully. This is your dashboard.
    </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid"></div>
        </div>
    </div>
</div>
</template>
<script setup>
import { useUserStore } from "../../stores/user";
const userStore = useUserStore();
</script>