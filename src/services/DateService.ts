class DateService {
  getFormattedData(d: string) {
    const date = new Date(d);
    if (!date) {
      return d;
    }
    const hours = date.getHours() < 9 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }
}

export default new DateService()