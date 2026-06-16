<template>
  <div>
    <div class="description">
      <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.</p>
    </div>

    <div class="tabs">
      <button class="tab disabled" disabled>Аппаратура</button>
      <button class="tab active">Люди</button>
      <button class="tab" @click="$router.push('/')">Пространство</button>
      <button class="tab disabled" disabled>Профиль</button>
    </div>

    <div id="people" class="tab-content active">
      <div class="people-list">
        <div class="person-card" v-for="(person, idx) in people" :key="idx">
          <h3 class="person-name">{{ person.name }}</h3>
          <p class="person-description">{{ person.description }}</p>
          <div class="person-actions">
            <button class="btn-outline" @click="invitePerson(idx)">Пригласить</button>
            <button class="btn-outline" @click="detailPerson(idx)">Подробнее</button>
          </div>
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

const people = [
  { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
  { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
  { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
  { name: 'Иван Иванов', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
  { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
  { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
  { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' },
  { name: 'Анастасия Ремогузина', description: 'Высококачественная видеосъёмка и акробатика: доступные цены, профессиональное оборудование и о...' }
]

const showInviteDetail = (idx) => alert(`Подробнее о приглашении #${idx + 1}`)
const openInvite = (idx) => alert(`Открыть приглашение #${idx + 1}`)
const invitePerson = (idx) => alert(`Пригласить ${people[idx].name}`)
const detailPerson = (idx) => alert(`Подробнее о ${people[idx].name}`)
</script>