<template>
  <div>
    <h2 class="page-title">Новое мероприятие</h2>

    <form class="booking-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label class="form-label">Название</label>
        <input type="text" class="form-input" placeholder="Введите название мероприятия" v-model="form.title">
      </div>

      <div class="form-group">
        <label class="form-label">Выберите время мероприятия</label>
        <div class="time-grid">
          <button type="button" class="time-slot" :class="{ active: selectedTime === time }" 
            v-for="time in timeSlots" :key="time" @click="selectedTime = time">
            {{ time }}
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Ответственные лица</label>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" value="ivanov" v-model="form.responsibles"> Иван Иванов
          </label>
          <label class="checkbox-label">
            <input type="checkbox" value="ivanova" v-model="form.responsibles"> Елена Иванова
          </label>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Дополнительная информация</label>
        <textarea class="form-textarea" rows="4" placeholder="Добавить комментарий" v-model="form.comment"></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-primary">Забронировать</button>
        <button type="button" class="btn-secondary" @click="$router.push('/')">Отмена</button>
      </div>
    </form>

    <div class="modal" :class="{ show: modalVisible }" @click="modalVisible = false">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">Ошибка</h3>
        <p class="modal-text">Неверный запрос. Обратитесь в техподдержку</p>
        <button class="btn-primary" @click="modalVisible = false">Принять</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const timeSlots = [
  '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
  '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
  '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
]

const form = reactive({
  title: '',
  responsibles: [],
  comment: ''
})

const selectedTime = ref(null)
const modalVisible = ref(false)

const handleSubmit = () => {
  modalVisible.value = true
}
</script>