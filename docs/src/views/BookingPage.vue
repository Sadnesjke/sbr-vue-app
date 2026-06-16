<template>
  <div>
    <h2 class="page-title">Бронирование</h2>

    <form class="booking-form" @submit.prevent="handleSubmit">
      <!-- Мероприятие -->
      <div class="form-group">
        <label class="form-label">Мероприятие</label>
        <select class="form-select" v-model="form.event">
          <option value="">Выберите мероприятие</option>
          <option value="совещание">Совещание</option>
          <option value="презентация">Презентация</option>
          <option value="тренинг">Тренинг</option>
        </select>
      </div>

      <!-- Время мероприятия -->
      <div class="form-group">
        <label class="form-label">Выберите время мероприятия</label>
        <div class="time-grid">
          <button type="button" class="time-slot" :class="{ active: selectedTime === time }" 
            v-for="time in timeSlots" :key="time" @click="selectedTime = time">
            {{ time }}
          </button>
        </div>
      </div>

      <!-- Ответственные лица -->
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

      <!-- Дополнительная информация -->
      <div class="form-group">
        <label class="form-label">Дополнительная информация</label>
        <textarea class="form-textarea" rows="4" placeholder="Добавить комментарий" v-model="form.comment"></textarea>
      </div>

      <!-- Кнопки -->
      <div class="form-actions">
        <button type="submit" class="btn-primary">Забронировать</button>
        <button type="button" class="btn-secondary" @click="$router.push('/')">Отмена</button>
      </div>
    </form>

    <!-- Модальное окно ошибки -->
    <div class="modal" :class="{ show: modalVisible }" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h3 class="modal-title">Ошибка</h3>
        <p class="modal-text">Неверный запрос. Обратитесь в техподдержку</p>
        <button class="btn-primary" @click="closeModal">Принять</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Временные слоты (как в HTML)
const timeSlots = [
  '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
  '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
  '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
]

// Форма
const form = reactive({
  event: '',
  responsibles: [],
  comment: ''
})

const selectedTime = ref(null)
const modalVisible = ref(false)

// Отправка формы
const handleSubmit = () => {
  console.log('Форма отправлена:', {
    event: form.event,
    time: selectedTime.value,
    responsibles: form.responsibles,
    comment: form.comment
  })
  modalVisible.value = true
}

// Закрыть модальное окно
const closeModal = () => {
  modalVisible.value = false
}
</script>