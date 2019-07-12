
function update(){
	$('.club').attr("src","./ace-of-club.svg");
	$('.diamonds').attr("src","./ace-of-diamonds.svg");
	$('.hearts').attr("src","./ace-of-hearts.svg");
	$('.spades').attr("src","./ace-of-spades.svg");
	$('.back').attr("src","./joker-card.svg");
}

function issuecard(){

	var club=0, diamonds=0, hearts=0, spades=0;

	for(var i=0;i<16;){
		var a=Math.floor(Math.random()*4);
		if((a==0)&&(club<4)){
			club++;
			$('#d2').append('<img class="issue club" id="img'+i+'">');
			i++;
		}
		else if ((a==1)&&(diamonds<4)) {
			diamonds++;
			$('#d2').append('<img class="issue diamonds" id="img'+i+'">');
			i++;
		}
		else if ((a==2)&&(hearts<4)) {
			hearts++;
			$('#d2').append('<img class="issue hearts" id="img'+i+'">');
			i++;
		}
		else if ((a==3)&&(spades<4)) {
			spades++;
			$('#d2').append('<img class="issue spades" id="img'+i+'">');
			i++;
		}
		else{
			continue;
		}
	}
	$('.issue').hide().fadeIn(1000);
}

$(function(){
	issuecard();
	update();

	$("#b1").on('click', function(){
		$('.issue').addClass("back");
		update();
	});

	flip=0;
	var first='';
	var second='';

	$(".issue").on('click', function(){
		flip=$('#i1').val();

		$(this).removeClass("back");
		update();

		$(this).addClass("selected");

		if(flip==0){
			$('#i1').val(1);
			$('#i4').val(this.id);

			if($(this).hasClass("club")){
				first='club';
			}
			else if ($(this).hasClass("diamonds")) {
				first='diamonds';
			}
			else if ($(this).hasClass("hearts")) {
				first='hearts';
			}
			else{
				first='spades';
			}
			$('#i2').val(first);
		}
		else if (flip==1) {
			$('#i1').val(2);
			$('#i5').val(this.id);

			if($(this).hasClass("club")){
				second='club';
			}
			else if ($(this).hasClass("diamonds")) {
				second='diamonds';
			}
			else if ($(this).hasClass("hearts")) {
				second='hearts';
			}
			else{
				second='spades';
			}
			$('#i3').val(second);

			var myid1='#'+$('#i4').val();
			var myid2='#'+$('#i5').val();

			if(first==second){
				setTimeout(function(){

					$(myid1).addClass('done');
					$(myid2).addClass('done');

					first='';
					second='';
					$('#i1').val(0);
					$('#i2').val(first);
					$('#i3').val(second);
					$('#i4').val('');
					$('#i5').val('');
				},500);
			}
			else{
				setTimeout(function(){
					$(myid1).removeClass('selected');
					$(myid2).removeClass('selected');
					$(myid1).addClass('back');
					$(myid2).addClass('back');
					update();
					alert('try again');
					first='';
					second='';
					$('#i2').val(first);
					$('#i3').val(second);
					$('#i1').val(0);
					$('#i4').val('');
					$('#i5').val('');
				},500);
			}
		}
		update();
	});
});