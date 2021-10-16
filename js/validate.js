new JustValidate('.content-form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15
    },
    phone: {
      required: true,
      strength: {
        custom: '^\d+$'
      }
      }
    },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Имя должно содержать минимум 2 символа',
      maxLength: 'Имя дожно содержать не более 15 символов',
    },
    phone: {
      required: 'Укажите телефон',
      strength: 'Недопостимый формат'
    }

  }
})
