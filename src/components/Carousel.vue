<template>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item 
            v-for="(slide, i) in slides" 
            :key="i"
            :src="slide.image"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
            <div class="another_test">
                <h3>{{ slide.quote }}</h3>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        data () {
            return {
                slides: [
                    {
                        image:
                        'https://lh3.googleusercontent.com/LT_RGRov34uE1s1wvaBnbg30WFq88exoi-eMqqHeeSMyYhsByqGHinvYmnF-5Il0byd5wQfP48ONQSSVOBr-nYUFbRpY90EeK9yLfg4SOped9LValsz1ffvUIErqHbxEAgqz1Qxex_N6XLiiR2kok7Ko5x4dIW4B-ifYtbtHvRbsyJ6mGmmdWhKvG2O5OvHAh8U03jZKf1Nfmj9NDHNVfyZNQ3H_vzjwtv9wFgzbd1skldPPsiad8Th4YWDjFRe48wRqKKVPg8EGCKcsswqgR2YIrfHbAjbZYPj_1wie0Alvgta7AjbWm5cl1mGM8ahyA2XdbwtvtXcML0mJynNupb2zMfzK5_h57TBRl8v3Jyo4OYz_pcr8Dxk_Na_EpK6bFgnA7H0VmeLxGeM46H25VAmI7bQtsaYtsw3i8MOEBCiiPwrOpa1Tuor9fLZar_bMzL6kDcEkaxpwNpLo4YTVAsWl2Tewy0NqshWvp5S4ehJT_PcRfuTEUjDH_OG50MlZvcYuJw9rwNqxNy1wFe_qPLvAQ6TV7FPylKCsAbtnhO1ynLanqAvaeuXhR-qGGHH71TBqqJ16Aofv7aLg3fdOaFG1G71r4V2FukDjWSNSCgvcZVAC__vo3zST-AdGi24gQyJjlxka6CEQxQKCbyfTAX32t2wQDwUcNfZqI9GFV0D4ZJff0TlKOCFdA_7YanxIHkic9v_LkyWIXAoYS_RwcFW6HrHUwDt9mXFOEDXKDE69bgWQ=w1782-h1336-no', 
                        quote: "Don't let money be the thing that keeps your from having a relationship Chun, let all your other insecurities do that. - Ed Dawley (Tech Lead)"

                    },{
                        image:
                        'https://lh3.googleusercontent.com/5JGBxZEOSo7GG9RP1IpjfCrv1cFJDdSXXeBtb6NQ6Wab8fvPZz5CAzo97ubLpGo45odABO7micj6GNv5DoaCgty6fTrkTYpeQQPGU_G-hXdKPHDxfIlVlMrYy7mhTgtefQ4AsNUR-uEhbF0ipmh2hrUt-heh5ASQCDMcz9tJfUArhh4lOcTrPNpI-hVvMzQ2uW_6Nyi7MCpgYIV6W2MvQk1AvVDvrMv48Zb71CGL_OVb2p7Rbj46lRYV10TkSMykZHlZzHfOErT2Tgoaz3YgxnY0QN1Tch1Dxuy0F7XTQoFK5aWcyZqj7rSqTdrxF4h2mnsf6VxiTio4vT8eF1rcr3d4jbb994XeI1Ewqmpwdy4KBdRrttg7jzr4UxFDj5f9pNY4N76DVsMqNASOcTKulF-V1ciLp9VuelFkka-uQ69WKwHxyjfGUlOzR5m8Ei0NGrITpRGBXzSdOO90tORUJBMSgKCfpA7H6JlFfWYP8pKhKuLZ5pJH8md8gxzqCuTs7O4ETmxlk3aO54XR9tFP_bwnLCFadBv2zOpFQCf_srh5HVHdvT8Mw9nGneXq0wi5fZU-5FkZKwTy4QqXaJKgmNRb22t1XIODDA0OcBaYLL69Y4m8yx4k1UeDn9CJcI5ApfLBTPwnuMHvpqa0Vxb4G2tm9Xk02Rj-e0_23UAAnc4NyYnxiPzLF4SolpSyLqmnQeB86bS-N_Bh-lcv7lLJfmumdshKzKAc7njz8sYPP89mo1M9=w1782-h1336-no',
                        quote: "Sometimes I like you Chun but sometimes I hate everything about you - Ed Dawley (Tech Lead)"

                    },{
                        image:
                        'https://lh3.googleusercontent.com/pDumNS6TAfuTgQl18w0kjBu5j-C6UtUPRqCtNV_ONI9wvlquOwbxdifSisyKfgEHpnJpZVszVsZQFAgo0qiTBAlMdeDUUUOZ1j_DmxKIZfdv8Cinhn_kcCGBFeVoHIz7v2J1ImRS4RYtkABMeSEI1TJQCb3aJcMpAfOuGfkQCUOde9mHXu3M3O36lhrXMYWChWPg8ULOLVZeF31n9hxdTPzSuQ01dhev8DYIUADbiGXbgdvJdOYOmxqEKYqRLNOoS1YCmPONNorlnAj6xib6x5CVhIuhnp5Q-1zN6-eJdq_HCNC6SHRO1LODbT1Tduk3MXlsTpaPw1NVJwb7-5spa6nWEXzN-J8bPCWrER3AUJSXO-lJh_egpdiGliMgbUfiQ-jSUvCTnnljG8u2mCN1xpJUFkdpzoRlDdSR8mGeCX86SJ3Gmp5F8mfnUgI-d1twnR6-g4du7r-F-Ge-CqOby9ypGm1ezb2HZSkAZt9QpPtc4fknXxPOT8eU6L62XM9SufY7RM0YdY3Zym52KG-MrnYQNfhR85klnyyUWXruve7MEoqsbYQsP1zqeGaYOmbbqJh3F1SfC1T8M-hNIntVi4WLa1_FXd3IZg_7uPXBHxHMiA2jZzql9U-H-Kuk-LCX2xj8CxFkuAxMeqiP-LdAqB0Mft_lE_agnvWGa8r82qQ-lSf7DX0wO6w=w1655-h1242-no',
                        quote: "You're fairly intelligent Chun, but you do some dumb shit - Ed Dawley (Tech Lead)"
                    },{
                        image:
                        'https://lh3.googleusercontent.com/vKf15-LH8L5MGtSfUUckXtP3ytrDI00WLG4DJRwB1QvGwIChV8ifh72CgD-CsTgnSM8YIisl4vnzwOIoDUR19stgvAKGHugSgcjegKrgkLvfrVwNnA-vDKRhpfQq0ORfrxuLivkrX_ftPnT3AIc93XHqWudfzbR-fMAaZ0CRBUJju9XzuEdEIssbcDKGWpICu4S_oDzUXO74o3Fclv6jqq_64wYEo2_K0qNbVCQ_vtr_RqfspiPNGiZLTdXCtIygDUzexANuTKbAsYU2R2CHb580QQI-9NZkbeqOXHu5DPLK09sx2eQwRlJPlwxR0rcjvtP8Ghv5AZg9lQ9oYF4z2UO5GZQaxtXfs4lFbQdtgL56wmm-nH99q3OLqxTpKELUsL1Um4RmdpGhxhYEexneDqQX-ZRxCwnf3WuZafHJHomvOgKL7KcirFpX7qNljmb9iU6VTN_v3ojqFsDAL9EtZcB4UTx0FtslB4FvsgIlPhn2hnVvzFiwE3YOUitYP25Hx22QIcyNhC-MWNA5TBgxdZRqp0oywczv_eidrB6QZdYTYDcm5jBpyePFCvxsgemKN7h_5KLfhhe_QJEWP1gtu1tfvgv8aFiFocc8t3dSrOjFNivooMLjzcyjHJ_hT51IMxrwblEnuTOZq8lOwI9vlNfz9XmUReTM5I6zbsWMzoj1ZWWw2t97W-W0iLTumbt475BSJBigU9h1vtnkWCwk9Tj95VDYoFDMvyYV96MSq2mDj3lJ=w1782-h1336-no', 
                        quote: "You are right - Ed Dawley (Tech Lead)"
                    },
                ],
            }
        },
    }
</script>

<style>
.another_test {
    text-align: center;
    vertical-align: middle;
    line-height: 400px;  
}
h3 {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
