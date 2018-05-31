import { MeeleWeapon } from './meeleweapon';
import { RangeWeapon } from './rangeweapon';
import { Ability } from './ability';
import { Magic } from './magic';
export class Life {
	id:number;//cursed
	name:String;
	type: String;
	value: String;
	base:String;
	melleweapons: MeeleWeapon[];
	rangeweapons: RangeWeapon[];
	spd:number;
	arm:number;
	def:number;
	inc:number;
	von:number;
	arc:number;
	cmd:number;
	thr:number;
	abilities:Ability[];
	magics:Magic[];
}