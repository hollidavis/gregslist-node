export default class NotificationsService {
  static toast(title = 'Default Toasty', display = 'success') {
    // @ts-ignore
    Swal.fire({
      title: title,
      icon: display,
      position: 'top-right',
      timer: 3000,
      toast: true,
      showConfirmButton: false
    })
  }
}
