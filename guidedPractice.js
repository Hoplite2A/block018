//**************** GUIDED PRACTICE *****************//

// ! UNIT TESTS
/*
1. Number of floors available is equal to the number of floors in the building
2. When desired floor number(i.e. - 5) the elevator will go to that floor. 
3. The elevator will not move to the selected floor(s) until the doors close.
4. When multiple floors are selected (when the ) the elevator will stop in ascending order.
5. Door 'OPEN' button (when depresed) opens the doors.
6. Door 'CLOSE' button(when depresed) closes the doors.
7. The 'DOOR HOLD' button (when depressed) prevents the elevator doors from closing fully and stops elevator from moving again for 'x' number of 'units of time'
9. Emergency/911 button calls the emergency services.
10. The Emergency button allows communications with the building lobby/security.
11. (Assuming this is a digital display) Ensure that all floors display with correct businesses/assigned floor names on screen. 
*/

// ! INTERGRATION TESTS
/*
1. When the 'GOING UP' button is depressed, it will call the elevator and only move up && rise to the selected floors in ascending order.
2. When the 'GOING DOWN' button is depressed, it will call the elevator and only move DOWN && lower to the selected floors in descending order.
3. The 'DOOR HOLD' button (when depressed && doors are still fully opened) keeps doors open.
4. The 'DOOR HOLD' button (when depressed && doors are partially closed) reopens doors.
5. When the Emergency Services override to lower all elevators, the elevator panel locks out and slowly lowers to lowest available floor to the public.
6. When FIRE ALARMS go off while going up, control panel locks out and raises to next floor.
7. When FIRE ALARMS go off while going down, control panel locks out and lowers to closest floor.
*/

// ! FUNCTIONAL TESTS
/*
1. When 'GOING UP' button is pressed to call the elevator, the evelator will come and allow only accept values greater than the current floor number.
2. When the 'GOING ' button is depressed at a lower floor while the elevator is raising, the elevator will not be called until the floor deliveries are completed. 
3. When 'GOING DOWN' button is pressed to call the elevator, the evelator will come and allow only accept values less than the current floor number.
4. When the 'GOING ' button is depressed at a higher floor while the elevator is lowering, the elevator will not be called until the floor deliveries are completed.
*/

// ! ACCEPTANCE TEST
/*
1. Install updated panel to several clients ranging in size for 1 quarter and then compile data for editing. 
2. After 1st quarter of testing, 2nd interation of panel update is rolled out again for another quarter and then compile data and update panel for second and final iteration. 
*/
