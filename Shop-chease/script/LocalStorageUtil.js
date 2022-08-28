class LocalStorageSave{
    constructor(){
        this.Name='products'
        // this.evtTarg=
    }
    Localstr(item, evtTarg){
        let targt=evtTarg.target.closest('li').dataset.id
        for(const key in saveBusk) {
            if(saveBusk[key].id.includes(targt)===true){
                ++saveBusk[key].count
                localStorage.setItem(this.Name, JSON.stringify(saveBusk ))
                return
            }
        }
        saveBusk.push(item)
        localStorage.setItem('products', JSON.stringify(saveBusk ))
    }
    plusCount(evtTarg){
        let targt=evtTarg.target.closest('li').dataset.id
        for(const key in saveBusk) {
            if(saveBusk[key].id.includes(targt)===true){
                saveBusk[key].count=parseInt(saveBusk[key].count)+1
                localStorage.setItem(this.Name, JSON.stringify(saveBusk ))
            }
        }
    }
    minusCount(evtTarg){
        let targt=evtTarg.target.closest('li').dataset.id
        for(const key in saveBusk) {
            if(saveBusk[key].id.includes(targt)===true){
                saveBusk[key].count= parseInt(saveBusk[key].count)-1
                localStorage.setItem(this.Name, JSON.stringify(saveBusk ))
            }
        }
    }
    deleteCount(evtTarg){
        let targt=evtTarg.target.closest('li').dataset.id
        for(const key in saveBusk) {
            if(saveBusk[key].id.includes(targt)===true){
                saveBusk.splice(saveBusk[key],1) 
                localStorage.setItem(this.Name, JSON.stringify(saveBusk ))
            }
        }
    }
}
const localStorageSave=new LocalStorageSave