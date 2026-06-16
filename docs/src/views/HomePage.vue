<template>
  <div>
    <div class="description">
      <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.</p>
    </div>

    <div class="tabs">
      <button class="tab disabled" disabled>Аппаратура</button>
      <button class="tab" @click="$router.push('/people')">Люди</button>
      <button class="tab active">Пространство</button>
      <button class="tab disabled" disabled>Профиль</button>
    </div>

    <div id="space" class="tab-content active">
      <!-- Коворкинг ИРНИТУ -->
      <div class="space-card">
        <h2 class="space-title">Коворкинг ИРНИТУ</h2>
        <div class="time-slots-list">
          <button class="time-slot" v-for="time in timeSlots" :key="time">{{ time }}</button>
        </div>
        <div class="space-actions">
          <button class="btn-primary" @click="$router.push('/booking')">Забронировать</button>
          <button class="btn-outline" @click="showDetail">Подробнее</button>
        </div>
      </div>

      <div class="space-card">
        <h2 class="space-title">Переговорная ИРНИТУ</h2>
        <div class="time-slots-list">
          <button class="time-slot" v-for="time in timeSlots" :key="time">{{ time }}</button>
        </div>
        <div class="space-actions">
          <button class="btn-primary" @click="$router.push('/booking')">Забронировать</button>
          <button class="btn-outline" @click="showDetail">Подробнее</button>
        </div>
      </div>

      <div class="calendar-card">
        <h3 class="section-title">Декабрь 2023</h3>
        <div class="calendar">
          <div class="calendar-weekdays">
            <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
          </div>
          <div class="calendar-days">
            <span v-for="day in calendarDays" :key="day">{{ day }}</span>
          </div>
        </div>
      </div>

      <div class="invitations-card">
        <h3 class="section-title">Автивные приглашения</h3>
        <div class="invitation-item" v-for="(inv, idx) in invitations" :key="idx">
          <h4>{{ inv.title }}</h4>
          <p class="inv-time">{{ inv.time }}</p>
          <p class="inv-person">{{ inv.person }}</p>
          <p class="inv-role">{{ inv.role }}</p>
          <div class="inv-actions">
            <button class="btn-small" @click="showInviteDetail(idx)">Подробнее</button>
            <button class="btn-small btn-open" @click="openInvite(idx)">Открыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const timeSlots = [
  '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
  '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
  '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
]

const calendarDays = [
  27, 28, 29, 30, 1, 2, 3,
  4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31
]

const invitations = [
  { title: 'Съёмки в первомайском', time: '10:00 - 12:00', person: 'Иванов И.В.', role: 'Фотограф' },
  { title: 'Съёмки в первомайском', time: '10:00 - 12:00', person: 'Иванов И.В.', role: 'Фотограф' }
]

const showDetail = () => alert('Подробнее')
const showInviteDetail = (idx) => alert(`Подробнее о приглашении #${idx + 1}`)
const openInvite = (idx) => alert(`Открыть приглашение #${idx + 1}`)
</script>