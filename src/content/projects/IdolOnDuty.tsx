export default function IdolOnDuty() {
	return (
		<div className="flex flex-col p-8">
			<div className="text-accent text-5xl font-bold italic place-self-center">
				Idol on Duty
			</div>

			<div className="divider divider-vertical text-primary text-2xl font-bold italic">
				Summary
			</div>

			<div className="flex bg-base-100">
				<div className="flex-1 flex flex-col p-4 w-1/2">
					<div className="space-x-1">
						<>Published on: </>
						<a
							className="text-secondary underline"
							href="https://store.steampowered.com/app/5306710/Idol_On_Duty/">
							Steam
						</a>
						<a
							className="text-secondary underline"
							href="https://games.digipen.edu/games/idol-on-duty">
							DigiPen
						</a>
					</div>

					<div>
						Engine: Unreal Engine 5 (C++ Project)
					</div>

					<div>
						Version Control: Perforce
					</div>

					<div>
						Platform: Windows
					</div>

					<div className="divider divider-vertical" />

					<div className="flex flex-col">
						Roles:
						<div>
							Technical Lead
						</div>

						<div>
							Gameplay Engineering Lead
						</div>

						<div>
							Art and Design Tools Engineer
						</div>

						<div>
							Production Support
						</div>
					</div>
				</div>


				<div className="flex-1">
					<img
						src="https://games.digipen.edu/system/photos/14619/original/Idolonduty_Screenshot14.png"
						alt="Final Cutscene"
					/>
				</div>
			</div>

			<div className="divider divider-vertical font-bold italic">
				Technical Lead Work
			</div>

			{
				// TODO: Continue writing about Idol On Duty here:
				// just add enough pictures about what you did and learned in each position
			}

		</div>
	);
}
