Props
=====

month
------------
Defaut month to be selected when datepicker is loaded.

* Type ``Number``
* Default ``Current month``

year
------------
Defaut year to be selected when datepicker is loaded.

* Type ``Number``
* Default ``Current year``

inline
------------
Whether the datepicker is shown inline or as a popover with text fields.

* Type ``Boolean``
* Default ``false``

allowRange
------------
Whether a date range can be selected or only a single date.

* Type ``Boolean``
* Default ``false``

multiMonth
------------
Shows two calendars side by side.

* Type ``Boolean``
* Default ``false``

startDateLabel
------------
The label for the start date input.

Note: Incase of `allowRange` is false this props will be used as label

* Type ``String``
* Default ``""``

endDateLabel
------------
The label for the end date input.

* Type ``String``
* Default ``""``

startDatePlaceholder
------------
The placeholder for the start date input.

Note: Incase of `allowRange` is false this props will be used as placeholder.

* Type ``String``
* Default ``""``

endDatePlaceholder
------------
The placeholder for the end date input.

* Type ``String``
* Default ``""``

formatDateInput
------------
To change default text field date format pass your desired date format.

* Type ``String``
* Default ``dd-MM-yyyy``