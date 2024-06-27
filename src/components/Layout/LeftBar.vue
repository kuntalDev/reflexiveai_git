<template>
    <div class="left_side bg-black h-screen fixed left-0 top-0 py-[24px] ease-in-outs">
        <div class="ease-in-out flex justify-between items-center pb-[30px] xxl:pb-[56px] px-[13px]">
            <RouterLink :to="{ name: 'Index' }" class="ease-in-out">
                <img src="/src/assets/images/reflexive-logo.svg" alt="logo" />
            </RouterLink>
            <button @click="toggleClass">
                <img src="/src/assets/images/humberger.svg" alt="humberger" />
            </button>
        </div>
        <div class="relative pb-[24px] px-[13px]">
            <RouterLink :to="{ name: 'Index' }" class="relative">
                <div class="absolute top-[14px] xxl:top-[19px] left-[14px] z-[1]">
                    <img src="/src/assets/images/plus.svg" alt="plus" />
                </div>
                <p
                    class="relative flex items-center Pattanakarn-Medium w-full h-[40px] xxl:h-[50px] leading-normal bg-[#444746] rounded-full text-[13px] font-medium text-[#fff] pl-[35px] pr-[35px]" @click="newChat">
                    New Chat
                </p>
                <button type="submit" class="absolute top-[12px] xxl:top-[17px] right-[14px]">
                    <img src="/src/assets/images/send.svg" alt="send" />
                </button>
            </RouterLink>
        </div>
        <div class="left_scroll overflow-y-auto px-[13px]">
            <h2 class="Pattanakarn-Medium text-[16px] font-medium text-[#A2A2A2] pb-[20px]">
                Recent
            </h2>
            <ul class="height_ul ease-in-out" :class="{ expanded: showAll }">
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Healthy Diel Tips
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Litigation Feature Added
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Upwork Full Stack Developer
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Brainstorming Buddy
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Skilled Web Designer
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Healthy Diel Tips
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Litigation Feature Added
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Upwork Full Stack Developer
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Brainstorming Buddy
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/message.svg" alt="message" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Skilled Web Designer
                        </span>
                    </RouterLink>
                </li>
            </ul>
            <div>
                <button @click="toggleShowAll" class="flex items-center"
                    :class="{ 'some-class': showAll, 'another-class': !showAll }">
                    <img src="/src/assets/images/angel.svg" alt="angel" class="ease-in-out" />
                    <span class="inline-block pl-[9px] text-[10px] text-[#fff] Pattanakarn-Regular">
                        {{ showAll ? "Show Less" : "Show More" }}
                    </span>
                </button>
            </div>
            <!-- <ul class="pt-[40px] xxl:pt-[90px]">
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="flex items-center">
                        <img src="/src/assets/images/help.svg" alt="help" />
                        <span class="ease-in-out inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Help
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="flex items-center">
                        <img src="/src/assets/images/active.svg" alt="active" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Activity
                        </span>
                    </RouterLink>
                </li>
                <li class="pb-[21px]">
                    <RouterLink :to="{ name: 'Index' }" class="ease-in-out flex items-center">
                        <img src="/src/assets/images/setting.svg" alt="setting" />
                        <span class="inline-block pl-[9px] text-[13px] text-[#fff] Pattanakarn-Regular">
                            Settings
                        </span>
                    </RouterLink>
                </li>
            </ul> -->
        </div>
    </div>
    <div
        class="left_background hidden w-full h-full top-0 left-0 bottom-0 right-0 bg-[#00000094] fixed ease-in-out z-[90]">
        <button @click="toggleClass"
            class="w-full h-full top-0 left-0 bottom-0 right-0 bg-[#00000094] fixed ease-in-out z-[90]"></button>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import EventBus from '@/eventBus';

export default {
    name: "LeftBar",
    data() {
        return {
            showAll: false,
        };
    },
    methods: {
        toggleShowAll() {
            this.showAll = !this.showAll;
        },
        toggleClass() {
            document.body.classList.toggle("active");
        },
        newChat() {
            EventBus.emit('newChatClicked');
        }
    },
};
</script>
