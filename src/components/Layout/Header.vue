<template>
    <header
        class="ease-in-outs flex justify-between items-center px-[20px] pt-[20px] sm:pt-[27px] pb-[20px] sm:pb-[23px] border border-solid border-[#D2DDEB] relative z-10 bg-white">
        <div class="flex items-center">
            <div>
                <button @click="toggleClass" class="pr-[20px] ease-in-out humberger hidden">
                    <img src="/src/assets/images/humberger.svg" alt="humberger" />
                </button>
            </div>
            <div class="dropdown_list relative" ref="dropdown">
                <button
                    class="flex justify-between items-center border border-solid border-[#DADADA] rounded-full Pattanakarn-Medium text-[11px] sm:text-[14px] font-medium text-[#444746] px-[10px] sm:px-[25px] py-[5px]"
                    @click="toggleDropdown">
                    {{ selectedAgent || 'Select Agent' }}
                    <span class="pl-[23px] ease-in-out" :class="{ 'rotate': dropdownOpen }">
                        <img src="/src/assets/images/dropdown-angle.svg" alt="dropdown-angle" class="ease-in-out" />
                    </span>
                </button>
                <ul class="absolute bg-[#fff] rounded-[5px] px-[16px] w-[237px] top-[140%]" v-show="dropdownOpen">
                    <li v-for="(agent, index) in agents" :key="index"
                        class="flex items-center py-[13px] Pattanakarn-Regular text-[14px] text-[#040404] cursor-pointer"
                        @click="selectAgent(agent.filename)">
                        <span class="pr-[10px]">
                            <img src="/src/assets/images/people.svg" alt="people" />
                        </span>
                        {{ getFirstWord(agent.filename) }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex items-center">
            <div>
                <button @click="toggleDiv">
                    <img src="/src/assets/images/download.svg" alt="download" />
                </button>
                <div v-if="isDivVisible"
                    class="fixed m-auto w-[96%] sm:w-full max-w-[550px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2]">
                    <div class="modal_download_background max-w-[550px] bg-[#fff] rounded-[6px]">
                        <div
                            class="flex justify-between items-center py-[14px] px-[20px] mb-[15px ] border-b border-solid border-[#DADADA]">
                            <h2 class="text-[18px] text-[#040404] Pattanakarn-Medium">Share public link to chat</h2>
                            <button @click="toggleDiv" class="text-[14px] text-[#040404] Pattanakarn-Medium p[6px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000"
                                    viewBox="0 0 24 24" class="icon-md">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="pt-[20px] sm:pt-[30px] px-[20px] ">
                            <p class="text-[12px] sm:text-[13px] text-[#040404] Pattanakarn-Medium">Your name and any
                                messages you add after sharing stay private.</p>
                        </div>
                        <div class="mt-[30px] sm:mt-[50px] pb-[40px] mx-[20px] relative">
                            <input type="text" placeholder="" value="" readonly
                                class="border border-solid border-[#DADADA] rounded-full Pattanakarn-Medium text-[11px] relative w-full h-[46px] sm:h-[60px]">
                            <button class="absolute right-[4px] sm:right-[6px] top-[4px] sm:top-[6px]">
                                <div
                                    class="flex items-center bg-[#000] Pattanakarn-Regular text-[12px] text-white px-[18px] sm:px-[24px] py-[7px] sm:py-[12px] rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24" class="icon-sm">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M18.293 5.707a4.657 4.657 0 0 0-6.586 0l-1 1a1 1 0 0 1-1.414-1.414l1-1a6.657 6.657 0 1 1 9.414 9.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a4.657 4.657 0 0 0 0-6.586m-2.586 2.586a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0m-9 1a1 1 0 0 1 0 1.414l-1 1a4.657 4.657 0 0 0 6.586 6.586l1-1a1 1 0 0 1 1.414 1.414l-1 1a6.657 6.657 0 1 1-9.414-9.414l1-1a1 1 0 0 1 1.414 0"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="pl-[8px]">Create Link</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="isDivVisible" class="w-full h-full top-0 left-0 bottom-0 right-0 fixed ease-in-out z-[1]">
                    <button @click="toggleDiv"
                        class="w-full h-full top-0 left-0 bottom-0 right-0 bg-[#00000080] fixed ease-in-out z-[1]"></button>
                </div>
            </div>
            <div class="dropdown_profile relative border-l-2 border-solid border-[#D2DDEB] pl-[10px] sm:pl-[20px] ml-[10px] sm:ml-[30px]"
                ref="dropdown1">
                <button
                    class="flex justify-between items-center Pattanakarn-Medium text-[14px] font-medium text-[#444746]"
                    @click="toggleDropdown1">
                    <span class="hidden sm:block">Michel</span>
                    <span class="ml-[9px] w-[32px] h-[32px]">
                        <img src="/src/assets/images/profile.jpg" alt="profile-image" class="rounded-full" />
                    </span>
                </button>
                <ul class="absolute bg-[#fff] rounded-[5px] px-[20px] w-[252px] top-[140%] right-0"
                    v-if="isDropdownOpen1" @click.self="closeDropdown1">
                    <!-- <li class="flex items-center py-[14px] Pattanakarn-Regular text-[14px] text-[#040404] cursor-pointer" @click.stop="handleListItemClick1">
                        <span class="pr-[10px]">
                            <img src="/src/assets/images/plan.svg" alt="plan" />
                        </span>
                        My plan
                    </li> -->
                    <!-- <li class="flex items-center py-[14px] Pattanakarn-Regular text-[14px] text-[#040404] cursor-pointer" @click.stop="handleListItemClick1">
                        <span class="pr-[10px]">
                            <img src="/src/assets/images/people.svg" alt="people" />
                        </span>
                        My reflexive
                    </li> -->
                    <!-- <li class="flex items-center py-[14px] Pattanakarn-Regular text-[14px] text-[#040404] cursor-pointer" @click.stop="handleListItemClick1">
                        <span class="pr-[10px]">
                            <img src="/src/assets/images/customize.svg" alt="customize" />
                        </span>
                        Customize reflexive
                    </li> -->
                    <li class="flex items-center py-[14px] Pattanakarn-Regular text-[14px] text-[#040404] cursor-pointer"
                        @click.stop="handleListItemClick1">
                        <span class="pr-[10px]">
                            <img src="/src/assets/images/settings.svg" alt="settings" />
                        </span>
                        Settings
                    </li>
                    <!-- <li class="flex items-center py-[14px] Pattanakarn-Regular text-[14px] text-[#040404] cursor-pointer" @click.stop="handleListItemClick1">
                        <span class="pr-[10px]">
                            <img src="/src/assets/images/download1.svg" alt="download1" />
                        </span>
                        Download the macOS app
                    </li> -->
                    <li class="flex items-center py-[14px] Pattanakarn-Regular text-[14px] text-[#040404] cursor-pointer"
                        @click.stop="handleListItemClick1">
                        <span class="pr-[10px]">
                            <img src="/src/assets/images/logout.svg" alt="logout" />
                        </span>
                        Log out
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { ref } from 'vue';
import EventBus from '@/eventBus';
export default {
    name: 'Header',
    setup() {
        const selectedAgent = ref(null);
        // Listen for 'newChatClicked' event
        EventBus.on('newChatClicked', () => {
            selectedAgent.value = null; // Reset selectedAgent on new chat click
        });
        return {
            selectedAgent,
        };
    },
    data() {
        return {
            dropdownOpen: false,
            agents: {},
            isDropdownOpen1: false,
            isDivVisible: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
            if (this.dropdownOpen) {
                document.addEventListener('click', this.closeDropdownOnOutsideClick);
            } else {
                document.removeEventListener('click', this.closeDropdownOnOutsideClick);
            }
        },

        selectAgent(agent) {
            this.selectedAgent = this.getFirstWord(agent);
            this.dropdownOpen = false;
            document.removeEventListener('click', this.closeDropdownOnOutsideClick);
        },

        closeDropdownOnOutsideClick(event) {
            if (!this.$refs.dropdown.contains(event.target)) {
                this.dropdownOpen = false;
                document.removeEventListener('click', this.closeDropdownOnOutsideClick);
            }
        },

        toggleDropdown1() {
            this.isDropdownOpen1 = !this.isDropdownOpen1;
        },

        closeDropdown1() {
            this.isDropdownOpen1 = false;
        },

        handleClickOutside(event) {
            if (this.$refs.dropdown1 && !this.$refs.dropdown1.contains(event.target)) {
                this.isDropdownOpen1 = false;
            }
        },

        handleListItemClick1() {
            this.isDropdownOpen1 = false;
        },

        toggleClass() {
            document.body.classList.toggle('active');
        },

        toggleDiv() {
            this.isDivVisible = !this.isDivVisible;
        },

        getFirstWord(filename) {
            const namePart = filename.split('.')[0];
            const formattedName = namePart.replace(/[_-]/g, ' ');
            const capitalizedWords = formattedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return capitalizedWords;
        },

        async fetchPromptFiles() {
            try {
                const response = await this.$axios({
                    method: 'post',
                    url: 'https://reflexive-backend.onrender.com/db/get_prompt_files',
                    data: {
                        username: 'test2'
                    },
                    headers: {
                        'X_API_KEY': '535446bc6b64784563db09abdeedb269ae37ebd7de50a673ff704fbc2fe5b079',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                });
                this.agents = response.data.data;
            } catch (error) {
                console.error('Error fetching prompt files:', error);
                throw error;
            }
        },

    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    created() {
        this.fetchPromptFiles();
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    destroyed() {
        document.removeEventListener('click', this.closeDropdownOnOutsideClick);
    }
}
</script>