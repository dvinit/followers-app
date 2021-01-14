import { AbstractControl } from "@angular/forms";

export class passwordValidators{
static validOldPassword(control:AbstractControl){

return new Promise((resolve)=>{
if(control.value!=='1234')
resolve ({invalidOldPassword:true});
else resolve(null);
});

}


}