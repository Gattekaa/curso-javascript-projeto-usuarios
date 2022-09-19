class Utils {
    static dateFormat(date) {
        return date.toLocaleString('pt-BR', {
            dateStyle: "short",
            timeStyle: "short"
        })
    }
}


//return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();