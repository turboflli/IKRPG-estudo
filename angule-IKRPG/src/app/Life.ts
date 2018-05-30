import { MeeleWeapon } from './meeleweapon';
import { RangeWeapon } from './rangeweapon';
import { Ability } from './ability';
export class Life {
	id:number;//cursed
	name:String;
	type: String;
	value: String;
	melleweapons: MeeleWeapon[];
	rangeweapons: RangeWeapon[];
	arm:number;
	def:number;
	inc:number;
	von:number;
	abilities:Ability[];
}